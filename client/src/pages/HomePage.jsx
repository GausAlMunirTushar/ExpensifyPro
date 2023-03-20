import React, {useState, useEffect} from 'react'
import {Form, Input, Modal, Select, Table, message, DatePicker} from 'antd'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import Spinner from '../components/Spinner'
import moment from 'moment'
const {RangePicker} = DatePicker;
const HomePage = () => {
  const [showModal, setShowModal] = useState(false) 
  const [loading, setLoading] = useState(false)
  const [alltransaction, setAlltransaction ] = useState([])
  const [frequency, setFrequency] = useState('7')
  const [selectedDate, setSelectedDate] = useState([])
  const [type, setType] = useState('all')
  //table data
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format('YYYY-MM-DD')}</span>
    },
    {
      title: "Amount",
      dataIndex: "amount"
    },
    {
      title: "Type",
      dataIndex: "type"
    },
    {
      title: "Category",
      dataIndex: "category"
    },
    {
      title: "Reference",
      dataIndex: "reference"
    },
    {
      title: "Actions"
    },
  ]
  // get all Transactions
  const getAllTransaction = async () => {
    const uri = 'https://amused-snaps-hen.cyclic.app'
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      const res = await axios.post(uri +'/transactions/get-transaction', {
        userid: user._id, 
        frequency,
        selectedDate,
        type
      })
      setLoading(false)
      setAlltransaction(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
      message.error('Ftech issue with tranction')
    }
  }
  // useEffect Hook
  useEffect(() => {
    getAllTransaction();
  },[frequency, selectedDate, type])
  // from handling
  const handleSumbit =  async(values) => {
    const uri = 'https://amused-snaps-hen.cyclic.app'
      try {
          const user = JSON.parse(localStorage.getItem('user'))
          setLoading(true)
          await axios.post(uri + '/transactions/add-transaction',{...values, userid: user._id} )
          setLoading(false)
          message.success('Transaction Added Successfully')
          setShowModal(false)
      } catch (error) {
          setLoading(false)
          message.error('Failed to Add Transaction')
      }
  }
  return (
    <Layout>
      {loading && <Spinner/>}
          <div className="filters">
              <div>
                <h6>Select Frequency</h6>
                <Select value={frequency} onChange={(values) => setFrequency(values)}>
                  <Select.Option value="7">Last 1 Week</Select.Option>
                  <Select.Option value="30">Last 1 Month</Select.Option>
                  <Select.Option value="365">Last 1 Year</Select.Option>
                  <Select.Option value="custom">Custom</Select.Option>
                </Select>
                {frequency === 'custom' && <RangePicker value={selectedDate} onChange={(values) => {values}}/>}
              </div>
              <div>
                <h6>Select Type</h6>
                <Select value={type} onChange={(values) => setType(values)}>
                  <Select.Option value="all">All</Select.Option>
                  <Select.Option value="income">Income</Select.Option>
                  <Select.Option value="expense">Expense</Select.Option>
                </Select>
              </div>
              <div>
                <button className='btn btn-primary' onClick={() => setShowModal(true)}>Add New</button>
              </div>
          </div>
          <div className="content">
            <Table columns={columns} dataSource={alltransaction}/>
          </div>
              <Modal 
              title="Add Transaction" 
              open={showModal} 
              onCancel={ () => setShowModal(false)} 
              footer={false}>
                  <Form layout='vetical'onFinish={handleSumbit}>
                      <Form.Item label="Amount" name="amount">
                        <Input type='text' placeholder='Enter Amount'/>
                      </Form.Item>
                      <Form.Item label="Type" name="type">
                        <Select placeholder="Expense Type">
                          <Select.Option value='income'>Income</Select.Option>
                          <Select.Option value='expense'>Expense</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Category" name="category">
                        <Select placeholder="Select Category">
                          <Select.Option value='salary'>Salary</Select.Option>
                          <Select.Option value='tip'>Tip</Select.Option>
                          <Select.Option value='project'>Project</Select.Option>
                          <Select.Option value='food'>Food</Select.Option>
                          <Select.Option value='medical'>Medical</Select.Option>
                          <Select.Option value='fee'>Fee</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Date" name='date'>
                        <Input type='Date' placeholder='Select Date'/>
                      </Form.Item>
                      <Form.Item label="Reference" name='reference'>
                        <Input type='text' placeholder='Reference'/>
                      </Form.Item>
                      <Form.Item label="Description" name='description'>
                        <Input type='text' placeholder='Description'/>
                      </Form.Item>
                      <div className="d-flex justify-content-end">
                          <button type='submit' className="btn btn-primary">SAVE</button>
                      </div>
                  </Form>
              </Modal>
    </Layout>
  )
}

export default HomePage