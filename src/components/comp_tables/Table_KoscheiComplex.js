import React from 'react';
import { Table } from 'react-bootstrap';

function table_KoscheiComplex(props) {
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
						3 Plate Comms Vest
					</td>
					<td>
						<p>1 x Server Tape - Orange</p>
						<p>1 x Formaldehyde</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>3 Plate Medic Vest</td>
					<td>
						<p>1 x Tattered Lab Notes</p>
						<p>2 x Delta Board</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>3 Plate Stealth Vest</td>
					<td>
						<p>1 x Chlorine</p>
						<p>1 x Server Tape - Black</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Tempered Plate Carrier</td>
					<td>
						<p>1 x Acetic Acid</p>
					</td>
				</tr>
				<tr>
					<th colSpan={2} className='py-4'>
						Backpacks
					</th>
				</tr>
				<tr>
					<td className='p-5'>Scavenger Backpack</td>
					<td>
						<p>2 x Server Tape - Black</p>
						<p>2 x Canned Goods</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Secure Backpack</td>
					<td>
						<p>2 x Delta Board</p>
						<p>1 x Gold Bar</p>
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
						<p>1 x Alpha Board</p>
						<p>1 x Server Tape - Silver</p>
						<p>1 x Lab Code Book</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>L2 Restricted Zone Key</td>
					<td>
						<p>4 x Wrench</p>
						<p>2 x Scientist's Notes</p>
					</td>
				</tr>
			</tbody>
		</Table>
	);
}

export default table_KoscheiComplex;
