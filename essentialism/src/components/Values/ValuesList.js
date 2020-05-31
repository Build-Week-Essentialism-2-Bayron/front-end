import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchValues } from '../../redux/actions/values'

const ValuesList = ({ values, fetchValues }) => {
	const [ list, setList ] = useState([])

	useEffect(
		() => {
			fetchValues()
			console.log(values)
			setList(values)
		},
		[ values ],
	)

	return (
		<div className='values-list'>
			{list.map(value => {
				return <h5>{value}</h5>
			})}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		values: state.values,
	}
}

export default connect(mapStateToProps, { fetchValues })(ValuesList)
