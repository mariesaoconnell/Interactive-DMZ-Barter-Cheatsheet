import React from 'react';
import { Table } from 'react-bootstrap';

function table_Building21(props) {
  return (
		<Table hover>
			<tbody>
				<tr>
					<th colSpan={2} className='py-4 '>
						Plate Vests
					</th>
				</tr>
				<tr>
					<td className='p-5' style={{ width: '45%' }}>
						Tempered Plate Carrier
					</td>
					<td>
						<p>1 x Classified Documents</p>
						<p>1 x Sensitive Documents</p>
						<p>2 x Documents</p>
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
						<p>3 x Encrypted Hard Drive</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Research Center Room Key</td>
					<td>
						<p>4 x Electrical Components</p>
						<p>2 x Jumper Cables</p>
						<p></p>
					</td>
				</tr>
				<tr>
					<th colSpan={2} className='py-4'>
						Misc
					</th>
				</tr>
				<tr>
					<td className='p-5'>Durable Gas Mask</td>
					<td>
						<p>2 x Tooth Paste</p>
						<p>1 x Lighter</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Munition Box</td>
					<td>
						<p>1 x Imported Tea </p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Bunker 11 Keycard</td>
					<td>
						<p>1 x Red Access Card</p>
						<p>1 x Blue Access Card</p>
						<p>1 x Black Access Card</p>
						<p>1 x Green Access Card</p>
					</td>
				</tr>
			</tbody>
		</Table>
	);
}

export default table_Building21;
