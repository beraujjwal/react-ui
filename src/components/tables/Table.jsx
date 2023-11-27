import React from 'react';
import { BasicTable } from './BasicTable';
// import { TreeTable } from './TreeTable';
// import { EditableTable } from './EditableTable';
import { useTranslation } from 'react-i18next';
import * as S from './Table.styles';

export const Table = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="basic-table" title={t('tables.basicTable')} padding="1.25rem 1.25rem 0">
          <BasicTable />
        </S.Card>
        {/* <S.Card id="tree-table" title={t('tables.treeTable')} padding="1.25rem 1.25rem 0">
          <TreeTable />
        </S.Card>
        <S.Card id="editable-table" title={t('tables.editableTable')} padding="1.25rem 1.25rem 0">
          <EditableTable />
        </S.Card> */}
      </S.TablesWrapper>
    </>
  );
};
