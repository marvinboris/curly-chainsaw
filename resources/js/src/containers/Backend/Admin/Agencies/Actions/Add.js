import React, { Component } from 'react';
import { Form, FormGroup, CustomInput } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane, faBatteryHalf, faBuilding, faUserTie, faBook, faRuler, faRulerVertical, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';

class Add extends Component {
    state = {
        name: '',
        latitude: '',
        longitude: '',
        radius: '',
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(e.target);
    }

    render() {
        const { name, latitude, longitude, radius } = this.state;

        return <Form onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="text" name="name" placeholder="Name" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={name} />
            <Input className="col-lg-6" type="number" name="radius" placeholder="Radius in meters(m)" onChange={this.inputChangedHandler} icon={faRuler} validation={{ required: true }} required value={radius} />
            <Input className="col-lg-6" type="number" name="latitude" placeholder="Latitude" onChange={this.inputChangedHandler} icon={faRulerVertical} validation={{ required: true }} required value={latitude} />
            <Input className="col-lg-6" type="number" name="longitude" placeholder="Longitude" onChange={this.inputChangedHandler} icon={faRulerHorizontal} validation={{ required: true }} required value={longitude} />

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postAgencies(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));