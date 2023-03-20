import React, {useState} from 'react'
import {Form, Input, Modal, Select, message} from 'antd'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import Spinner from '../components/Spinner'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false) 
  const [loading, setLoading] = useState(false)
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
              <div>Range filter</div>
              <div>
                <button className='btn btn-primary' onClick={() => setShowModal(true)}>Add New</button>
              </div>
          </div>
          <div className="content">
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
          </div>
    </Layout>
  )
}

export default HomePage