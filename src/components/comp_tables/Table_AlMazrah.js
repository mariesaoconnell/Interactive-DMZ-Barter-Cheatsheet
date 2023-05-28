import React from 'react';
import { Table } from 'react-bootstrap';

function Table_AlMazrah(props) {
  return (
		<Table hover>
			<tbody>
				<tr>
					<th colSpan={2} className='py-4'>
						Plate Vests
					</th>
				</tr>
				<tr>
					<td className='p-5' style={{ width: '45%' }}>
						3 Plate Stealth Vest
					</td>
					<td>
						<p>2 x Electrical Components</p>
						<p>1 x Comic Book</p>
						<p>1 x Game Console</p>
					</td>
				</tr>
				<tr>
					<th colSpan={2} className='py-4'>
						Keys
					</th>
				</tr>
				<tr>
					<td className='p-5'>Skeleton Key</td>
					<td>
						<p>1 x GPU</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Crane Control Room Key</td>
					<td>
						<p>6 x Stronghold Key Cards</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Sattiq Poppy Farmer House Key</td>
					<td>
						<p>3 x Radiation Blockers</p>
					</td>
				</tr>
				<tr>
					<th colSpan={2} className='py-4'>
						Misc
					</th>
				</tr>
				<tr>
					<td className='p-5'>Radiation Blocker</td>
					<td>
						<p>1 x Blow Torch</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Tactical Camera</td>
					<td>
						<p>1 x Car Battery</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Night Vision Goggles</td>
					<td>
						<p>1 x Aged Wine</p>
						<p>2 x Emergency Rations</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Rebreather</td>
					<td>
						<p>1 x Hard Drive</p>
						<p>1 x Imported Tea</p>
					</td>
				</tr>
				<tr>
					<td className='p-5' id='console-devkit'>Console Devkit</td>
					<td>
						<p>3 x Game Console</p>
						<p>1 x Gold Skull of Al Bagra</p>
						<p>2 x Nuclear Fuel Rods</p>
					</td>
				</tr>
			</tbody>
		</Table>
	);
}

export default Table_AlMazrah;
