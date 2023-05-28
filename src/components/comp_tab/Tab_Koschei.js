import React, {useState} from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap'
import Table_KoscheiComplex from '../comp_tables/Table_KoscheiComplex';
import Table_KoscheiComplex_Locked from '../comp_tables/Table_KoscheiComplex_Locked';

function Tab_Koschei(props) {
  const [key, setKey] = useState('not_locked')
  return (
    <Tabs
      activeKey={key}
      onSelect={(k)=>setKey(k)}
    >
      <Tab
        eventKey='not_locked'
        title='Not Locked'
      >
        <Container>
          <Table_KoscheiComplex />
        </Container>
      </Tab>
      <Tab
        eventKey='locked'
        title='Locked'
      >
        <Container>
          <Table_KoscheiComplex_Locked />
        </Container>
      </Tab>
    </Tabs>
  );
}

export default Tab_Koschei;
