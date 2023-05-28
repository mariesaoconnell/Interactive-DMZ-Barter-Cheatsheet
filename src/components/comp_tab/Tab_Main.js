import React, { useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap'
import Table_DmzCommon from '../comp_tables/Table_DmzCommon';
import Table_AlMazrah from '../comp_tables/Table_AlMazrah';
import Table_AshikaIsland from '../comp_tables/Table_AshikaIsland';
import Table_Building21 from '../comp_tables/Table_Building21';
import Table_KoscheiComplex from '../comp_tables/Table_KoscheiComplex';
import Table_KoscheiComplex_Locked from '../comp_tables/Table_KoscheiComplex_Locked';

import '../../styles/tab_style.css';

function Tab_Main() {
  const [key, setKey] = useState('common_dmz')
  return (
		<Tabs
			activeKey={key}
			onSelect={(k) => setKey(k)}
			fill>
			<Tab
				eventKey='common_dmz'
				title='Common DMZ'
				style={{ backgroundColor: 'rgba(255, 255, 255, .6)' }}>
				<Container>
					<Table_DmzCommon />
				</Container>
			</Tab>
			<Tab
				eventKey='al_mazrah'
				title='Al Mazrah'
				style={{ backgroundColor: 'rgba(255, 255, 255, .6)' }}>
				<Container>
					<Table_AlMazrah />
				</Container>
			</Tab>
			<Tab
				eventKey='ashika_island'
				title='Ashika Island'
				style={{ backgroundColor: 'rgba(255, 255, 255, .6)' }}>
				<Container>
					<Table_AshikaIsland />
				</Container>
			</Tab>
			<Tab
				eventKey='building_21'
				title='Building 21'
				style={{ backgroundColor: 'rgba(255, 255, 255, .6)' }}>
				<Container>
					<Table_Building21 />
				</Container>
			</Tab>
			<Tab
				eventKey='koschei_complex'
				title='Koschei Complex'
				style={{ backgroundColor: 'rgba(255, 255, 255, .6)' }}>
				<Container>
					<Table_KoscheiComplex />
				</Container>
			</Tab>
			<Tab
				eventKey='koschei_complex_locked'
				title='Koschei Complex (Special Buy)'
				style={{ backgroundColor: 'rgba(255, 255, 255, .6)'}}
        >
				<Container>
					<Table_KoscheiComplex_Locked setKey={setKey}/>
				</Container>
			</Tab>
		</Tabs>
	);
}

export default Tab_Main;
