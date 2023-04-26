import React, { useState } from 'react';
import { Layout, Button, Table, Tag, Modal } from 'antd';

import Header from '../../components/Header';

const { Content } = Layout;

type Student = {
  name: string;
  hasSubmitted: boolean;
}

const SubmissionPage = () => {
  const [students, setStudents] = useState<Student[]>([
    { name: 'John', hasSubmitted: true },
    { name: 'Jane', hasSubmitted: false },
    { name: 'Bob', hasSubmitted: true },
    { name: 'Alice', hasSubmitted: false },
  ]);

  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleViewSubmission = (student: Student) => {
    setSelectedStudent(student);
    setViewModalVisible(true);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Submission Status',
      dataIndex: 'hasSubmitted',
      key: 'hasSubmitted',
      render: (hasSubmitted: boolean) => (
        <Tag color={hasSubmitted ? 'green' : 'volcano'}>
          {hasSubmitted ? 'Submitted' : 'Not Submitted'}
        </Tag>
      ),
    },
    {
      title: 'View',
      key: 'view',
      render: (text: string, record: Student) => (
        <Button type="primary" onClick={() => handleViewSubmission(record)}>
          View
        </Button>
      ),
    },
  ];

  return (
    <>
      <Header>
        <Button type="primary" style={{ marginRight: '1rem' }}>
          Notifications
        </Button>
        <Button type="primary" danger>
          Exit
        </Button>
      </Header>
      <Content style={{ padding: '2rem' }}>
        <Table columns={columns} dataSource={students} />
        <Modal
          title={`${selectedStudent?.name}'s Submission`}
          visible={viewModalVisible}
          onCancel={() => setViewModalVisible(false)}
          footer={null}
        >
          <p>Submission Content Here</p>
        </Modal>
      </Content>
    </>
  );
};

export default SubmissionPage;
