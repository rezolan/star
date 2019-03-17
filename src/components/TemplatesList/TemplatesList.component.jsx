import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Modal, Button } from '@material-ui/core';
import { compose, withState } from 'recompose';
import { Card } from '../CardsList/Card';
import { styles } from './TemplatesList.styles';

const TemplatesList = (
	{ data,
		open,
		changeTemplate,
		setOpen,
		templates: { templatesList },
		classes: { item, modalBtn, modal } }) => (

		<div>
			<div className={modalBtn}>
				<Button
					variant="contained"
					onClick={() => setOpen(()=>true)}>show list of templates</Button>
			</div>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				className={modal}
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
					<Grid
						container
						justify="space-around"
						alignItems="center">
						<Button
							variant="contained"
							onClick={() => setOpen(()=>false)}>close</Button>
					</Grid>
				</Grid>
			</Modal>
		</div>
	);

TemplatesList.propTypes = {
	templates: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	changeTemplate: PropTypes.func.isRequired,
	setOpen: PropTypes.func.isRequired,
	classes: PropTypes.object
};

export default compose(
	withState('open', 'setOpen', false),
	withStyles(styles)
)(TemplatesList);