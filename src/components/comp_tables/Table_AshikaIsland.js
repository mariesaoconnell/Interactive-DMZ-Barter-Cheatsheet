import React from 'react';
import { Table } from 'react-bootstrap';

function Table_AshikaIsland(props) {
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
						<p>1 x Video Cassette Recorder</p>
						<p>1 x Vintage Wine</p>
						<p>1 x Encrypted Hard Drive</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Lost Room 403 Key</td>
					<td>
						<p>4 x Nuclear Fuel</p>
					</td>
				</tr>
				<tr>
					<th colSpan={2} className='py-4'>
						Misc
					</th>
				</tr>
				<tr>
					<td className='p-5'>Munition Box</td>
					<td>
						<p>1 x Imported Tea</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>Durable Gas Mask</td>
					<td>
						<p>2 x Tooth Paste</p>
						<p>1 x Lighter</p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>GPU</td>
					<td>
						<p>2 x Gold Bar</p>
						<p>5 x Thumb Drive</p>
						<p></p>
					</td>
				</tr>
				<tr>
					<td className='p-5'>MCPR-300</td>
					<td>
						<p>1 x Al Mazrah Train Manifest</p>
					</td>
				</tr>
				<tr>
					<td id="gold-fish" className='p-5'>Gold Fish</td>
					<td>
						<p>1 x Ashika Kitsune Original</p>
						<p>1 x Dog Bank</p>
						<p>1 x Cat Statue</p>
					</td>
				</tr>
			</tbody>
		</Table>
	);
}

export default Table_AshikaIsland;
