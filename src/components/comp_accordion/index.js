import React from 'react';
import { Accordion } from 'react-bootstrap';
import Table_DmzCommon from '../comp_tables/Table_DmzCommon'
import Table_AlMazrah from '../comp_tables/Table_AlMazrah';
import Table_AshikaIsland from '../comp_tables/Table_AshikaIsland';
import Table_Building21 from '../comp_tables/Table_Building21';
import Tab_Koschei from '../comp_tab/Tab_Koschei';


function MainAccordion(props) {
  return (
		<Accordion defaultActiveKey={0}>
			<Accordion.Item eventKey='0'>
				<Accordion.Header>DMZ Common</Accordion.Header>
				<Accordion.Body>
					<Table_DmzCommon />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='1'>
				<Accordion.Header>Al Mazrah</Accordion.Header>
				<Accordion.Body>
          <Table_AlMazrah />
        </Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='2'>
				<Accordion.Header>Ashika Island</Accordion.Header>
				<Accordion.Body>
          <Table_AshikaIsland />
        </Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='3'>
				<Accordion.Header>Building 21</Accordion.Header>
				<Accordion.Body>
          <Table_Building21 />
        </Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='4'>
				<Accordion.Header>Koschei Complex</Accordion.Header>
				<Accordion.Body>
          <Tab_Koschei />
        </Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default MainAccordion;
