import React, { Component } from 'react';
import { Form, FormGroup, CustomInput } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane, faBatteryHalf, faBuilding, faUserTie, faBook, faRuler, faRulerVertical, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';

const position = [51.505, -0.09];

class Add extends Component {
    state = {
        city_id: '',
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
        const { city_id, name, latitude, longitude, radius } = this.state;
        const { backend: { agencies: { cities } } } = this.props;

        const citiesOptions = cities.sort((a, b) => a.name > b.name).map(city => <option key={JSON.stringify(city)} value={city.id}>{city.name}</option>);

        return <Form onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="select" name="city_id" placeholder="Country" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={city_id}>
                <option>Select a city</option>
                {citiesOptions}
            </Input>
            <Input className="col-lg-6" type="text" name="name" placeholder="Name" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={name} />
            <Input className="col-lg-6" type="number" name="radius" placeholder="Radius in meters(m)" onChange={this.inputChangedHandler} icon={faRuler} validation={{ required: true }} required value={radius} />
            <Input className="col-lg-6" type="number" name="latitude" placeholder="Latitude" onChange={this.inputChangedHandler} icon={faRulerVertical} validation={{ required: true }} required value={latitude} />
            <Input className="col-lg-6" type="number" name="longitude" placeholder="Longitude" onChange={this.inputChangedHandler} icon={faRulerHorizontal} validation={{ required: true }} required value={longitude} />
            <FormGroup className="col-12">
                <Map center={position} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </Marker>
                </Map>
            </FormGroup>

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