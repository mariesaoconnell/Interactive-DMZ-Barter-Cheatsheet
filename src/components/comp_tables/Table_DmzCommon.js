import React from 'react';
import { Table } from 'react-bootstrap';

function Table_DmzCommon(props) {
  return (
		<Table>
			<tbody>
				<tr>
					<th colSpan={2} className='py-4'>
						Backpacks
					</th>
				</tr>

				<tr>
					<td className='py-5'>Scavenger Backpack</td>
					<td>
						<p>1 x Battery</p>
						<p>1 x Canned Foods</p>
						<p>1 x Gun Cleaning Oil</p>
					</td>
				</tr>
				<tr>
					<td className='py-5'>Secure Backpack</td>
					<td>
						<p>1 x Electric Drill</p>
						<p>1 x Gas Can</p>
						<p>1 x Gold Skull</p>
					</td>
				</tr>
				<tr>
					<td className='py-5'>Secure Backpack</td>
					<td>
						<p>1 x Electric Drill</p>
						<p>1 x Gas Can</p>
						<p>1 x Gold Skull</p>
					</td>
				</tr>

				<tr>
					<th colSpan={2} className='py-4'>
						Vests
					</th>
				</tr>

				<tr>
					<td className='py-5'>3 Plate Comms Vest</td>
					<td>
						<p>2 x Hard Drive</p>
						<p>2 x Battery</p>
						<p>1 x Soothing Hand Cream</p>
					</td>
				</tr>
				<tr>
					<td className='py-5'>3 Plate Medic Vest</td>
					<td>
						<p>3 x Bandage</p>
						<p>1 x Liquor</p>
						<p>1 x Watch</p>
					</td>
				</tr>

				<tr>
					<th colSpan={2} className='py-4'>
						Misc
					</th>
				</tr>

				<tr>
					<td className='py-5'>Armor Box</td>
					<td>
						<p>1 x Electrical Tape</p>
						<p>1 x Screw Driver</p>
						<p>1 x C4</p>
					</td>
				</tr>

				<tr>
					<td className='py-5'>Revive Pistol</td>
					<td>
						<p>1 x Bandage</p>
						<p>1 x Soothing Hand Cream</p>
					</td>
				</tr>
			</tbody>
		</Table>
	);
}

export default Table_DmzCommon;
