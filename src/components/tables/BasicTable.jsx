import React, { useEffect, useState, useCallback } from 'react';
import { AppTable } from '../common/tables/AppTable';
import { AppButton } from '../common/buttons/AppButton';
import { useTranslation } from 'react-i18next';
import { Notification } from '../../utils/Notification';
import { useMounted } from '../../hooks/useMounted';
import { AppSpace } from '../common/spaces/AppSpace';

const initialPagination = {
  current: 1,
  pageSize: 5,
};

export const BasicTable = () => {
  const [tableData, setTableData] = useState({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const { isMounted } = useMounted();

  const fetch = useCallback(
    (pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: false }));
      // getBasicTableData(pagination).then((res) => {
      //   if (isMounted.current) {
      //     setTableData({ data: res.data, pagination: res.pagination, loading: false });
      //   }
      // });



      const res = {
        data: [
          {
            key: 1,
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Architect', priority: 'LOW' },
              { value: 'Engineer', priority: 'MEDIUM' },
            ],
          },
          {
            key: 2,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: [{ value: 'Doctor', priority: 'HIGH' }],
          },
          {
            key: 3,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: [
              { value: 'Professor', priority: 'INFO' },
              { value: 'Architect', priority: 'LOW' },
            ],
          },
          {
            key: 4,
            name: 'Pavel Green',
            age: 30,
            address: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Engineer', priority: 'MEDIUM' },
              { value: 'Architect', priority: 'LOW' },
            ],
          },
          {
            key: 5,
            name: 'Alex Brown',
            age: 26,
            address: 'Minsk',
            tags: [{ value: 'Engineer', priority: 'MEDIUM' }],
          },
          {
            key: 6,
            name: 'Josh Black',
            age: 21,
            address: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Teacher', priority: 'INFO' },
              { value: 'Architect', priority: 'LOW' },
            ],
          },
          {
            key: 7,
            name: 'Cris Green',
            age: 22,
            address: 'Sidney No. 1 Lake Park',
            tags: [{ value: 'Architect', priority: 'LOW' }],
          },
          {
            key: 8,
            name: 'Jaime Black',
            age: 23,
            address: 'New York No. 1 Lake Park',
            tags: [{ value: 'Engineer', priority: 'MEDIUM' }],
          },
          {
            key: 9,
            name: 'Alina Brown',
            age: 19,
            address: 'Minsk',
            tags: [
              { value: 'Professor', priority: 'LOW' },
              { value: 'Teacher', priority: 'INFO' },
            ],
          },
          {
            key: 10,
            name: 'Cris Brown',
            age: 25,
            address: 'London',
            tags: [
              { value: 'Engineer', priority: 'MEDIUM' },
              { value: 'Teacher', priority: 'INFO' },
            ],
          },
          {
            key: 11,
            name: 'Alina Fens',
            age: 19,
            address: 'Minsk',
            tags: [
              { value: 'Professor', priority: 'LOW' },
              { value: 'Teacher', priority: 'INFO' },
            ],
          },
          {
            key: 12,
            name: 'Alex Snak',
            age: 28,
            address: 'Brest',
            tags: [
              { value: 'Professor', priority: 'LOW' },
              { value: 'Doctor', priority: 'HIGH' },
            ],
          },
          {
            key: 13,
            name: 'Pavel Dubrouski',
            age: 26,
            address: 'Minsk',
            tags: [
              { value: 'Professor', priority: 'LOW' },
              { value: 'Doctor', priority: 'HIGH' },
              { value: 'Teacher', priority: 'INFO' },
              { value: 'Engineer', priority: 'MEDIUM' },
            ],
          },
          {
            key: 14,
            name: 'Jack Donald',
            age: 24,
            address: 'New York',
            tags: [{ value: 'Professor', priority: 'LOW' }],
          },
          {
            key: 15,
            name: 'Nik Nest',
            age: 34,
            address: 'London',
            tags: [
              { value: 'Doctor', priority: 'HIGH' },
              { value: 'Engineer', priority: 'MEDIUM' },
            ],
          },
          {
            key: 16,
            name: 'Zak Nikls',
            age: 32,
            address: 'Minsk',
            tags: [
              { value: 'Doctor', priority: 'HIGH' },
              { value: 'Teacher', priority: 'INFO' },
            ],
          },
          {
            key: 17,
            name: 'Petr Dan',
            age: 29,
            address: 'Gomel',
            tags: [
              { value: 'Engineer', priority: 'MEDIUM' },
              { value: 'Teacher', priority: 'INFO' },
            ],
          },
          {
            key: 18,
            name: 'Alexa Pirs',
            age: 19,
            address: 'Moscow',
            tags: [
              { value: 'Professor', priority: 'LOW' },
              { value: 'Doctor', priority: 'HIGH' },
            ],
          },
          {
            key: 19,
            name: 'Mark Brown',
            age: 25,
            address: 'London',
            tags: [
              { value: 'Teacher', priority: 'INFO' },
              { value: 'Doctor', priority: 'HIGH' },
            ],
          },
          {
            key: 20,
            name: 'Alex Brons',
            age: 45,
            address: 'Bronx',
            tags: [{ value: 'Professor', priority: 'LOW' }],
          },
        ],
        pagination: { ...pagination, total: 20 },
      };
      setTableData({ data: res.data, pagination: res.pagination, loading: false });

    },
    [isMounted],
  );

  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination) => {
    fetch(pagination);
  };

  const handleDeleteRow = (rowId) => {
    setTableData({
      ...tableData,
      data: tableData.data.filter((item) => item.key !== rowId),
      pagination: {
        ...tableData.pagination,
        total: tableData.pagination.total ? tableData.pagination.total - 1 : tableData.pagination.total,
      },
    });
  };

  const columns = [
    {
      title: t('common.name'),
      dataIndex: 'name',
      render: (text) => <span>{text}</span>,
      filterMode: 'tree',
      filterSearch: true,
      filters: [
        {
          text: t('common.firstName'),
          value: 'firstName',
          children: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Pavel',
              value: 'Pavel',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Josh',
              value: 'Josh',
            },
          ],
        },
        {
          text: t('common.lastName'),
          value: 'lastName',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
            {
              text: 'Brown',
              value: 'Brown',
            },
          ],
        },
      ],
      onFilter: (value, record) => record.name.includes(value.toString()),
    },
    {
      title: t('common.age'),
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
      showSorterTooltip: false,
    },
    {
      title: t('common.address'),
      dataIndex: 'address',
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (text, record) => {
        return (
          <AppSpace>
            <AppButton
              type="ghost"
              onClick={() => {
                Notification.info({ message: t('tables.inviteMessage', { name: record.name }) });
              }}
            >
              {t('tables.invite')}
            </AppButton>
            <AppButton type="default" danger onClick={() => handleDeleteRow(record.key)}>
              {t('tables.delete')}
            </AppButton>
          </AppSpace>
        );
      },
    },
  ];

  return (
    <AppTable
      columns={columns}
      dataSource={tableData.data}
      pagination={tableData.pagination}
      loading={tableData.loading}
      onChange={handleTableChange}
      scroll={{ x: 800 }}
      bordered
    />
  );
};
