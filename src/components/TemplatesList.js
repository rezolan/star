import React from 'react';
import Card from './CardsList/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {compose, withState, withHandlers} from 'recompose';

const styles = theme => ({
	item: {
		cursor: 'pointer'
	},
	modalBtn: {
		padding: '10px 0',
		borderBottom: '1px solid',
		margin: '0 0 10px'
	}
});

const TemplatesList = ({ templates, data, changeTemplate, open, setOpen, classes: { item, modalBtn } }) => {
	const { templatesList } = templates;
	return (
		<div className="templates-list">
			<div className={modalBtn}>
				<Button onClick={() => setOpen(()=>true)}>show list of templates</Button>
			</div>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={()=>setOpen(()=>false)}
			>
			<Grid
				container
				spacing={8}
				alignItems="stretch">
				{templatesList.map(temp => (
					<Grid
						xs={12}
						md={4}
						item
						container
						alignItems="stretch"
						onClick={() => changeTemplate(temp.id)}
						className={item}
						key={temp.id}>
						<Card
							data={data}
							currentTemplate={temp}/>
					</Grid>))}
			</Grid>
			</Modal>
		</div>
	)
};
export default compose(
	withState('open', 'setOpen', false),
	withStyles(styles)
)(TemplatesList);
// export default withStyles(styles)(TemplatesList);