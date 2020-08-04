import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faCheck, faTimes, faPaperPlane, faClock, faCode, faSignature, faList, faBuilding, faUserTie, faBatteryHalf, faUser, faLock, faFile } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Label, CustomInput, Form, Alert, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parser } from 'html-to-react';
import moment from 'moment';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';
import { updateObject, parseMoment } from '../../../../../shared/utility';

const parser = new Parser();

class Edit extends Component {
    state = {
        agency_id: '',
        job_id: '',
        hired_on: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        photo: '',
        country: 'CM',
        code: '237',
        // social_media: [],
        is_active: '1',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.employee && prevState.agency_id === '') return updateObject(prevState, { ...nextProps.employee });
        return prevState;
    }

    inputChangedHandler = e => {
        const { name, value, type, files } = e.target;
        if (type === 'file') return this.setState({ [name]: files[0] });
        if (name === 'phone') return !isNaN(value) && this.setState({ [name]: value });
        if (name === 'country') return this.setState({ country: value, code: this.props.countries.find(({ country }) => country === value).code });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.submit(this.state.id, this.state);
    }

    render() {
        const { agency_id, job_id, hired_on, first_name, last_name, email, password, password_confirmation, phone, country, code } = this.state;
        const { backend: { employees: { agencies, jobs } }, countries } = this.props;

        const agenciesOptions = agencies.sort((a, b) => a.name > b.name).map(item => <option key={JSON.stringify(item)} value={item.id}>{item.name}</option>);
        const jobsOptions = jobs.sort((a, b) => a.name > b.name).map(item => <option key={JSON.stringify(item)} value={item.id}>{item.name}</option>);
        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

        return <Form onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="select" name="agency_id" placeholder="Agency" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={agency_id}>
                <option>Select an agency</option>
                {agenciesOptions}
            </Input>
            <Input className="col-lg-6" type="select" name="job_id" placeholder="Job" onChange={this.inputChangedHandler} icon={faUserTie} validation={{ required: true }} required value={job_id}>
                <option>Select a job</option>
                {jobsOptions}
            </Input>
            <Input className="col-lg-6" type="text" name="first_name" placeholder="First Name" onChange={this.inputChangedHandler} icon={faUser} validation={{ required: true }} required value={first_name} />
            <Input className="col-lg-6" type="text" name="last_name" placeholder="Last Name" onChange={this.inputChangedHandler} icon={faUser} validation={{ required: true }} required value={last_name} />
            <Input className="col-lg-6" type="date" name="hired_on" placeholder="Hired on" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={hired_on} />
            <Input className="col-lg-6" type="email" name="email" placeholder="E-Mail Address" onChange={this.inputChangedHandler} icon={faUser} validation={{ required: true }} required value={email} />
            <Input className="col-lg-6" type="password" name="password" placeholder="Password" onChange={this.inputChangedHandler} icon={faLock} validation={{ required: true }} required value={password} />
            <Input className="col-lg-6" type="password" name="password_confirmation" placeholder="Confirm Password" onChange={this.inputChangedHandler} icon={faLock} validation={{ required: true }} required value={password_confirmation} />
            <Input className="col-lg-6" type="select" addon={<span className="text-secondary text-small d-inline-flex">
                <div className="rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                    <span className={`flag-icon text-xx-large position-absolute flag-icon-${country.toLowerCase()}`} />
                </div>
            </span>} onChange={this.inputChangedHandler} value={country} validation={{ required: true }} name="country" required placeholder="Select Country">
                <option>Select a country</option>
                {countriesOptions}
            </Input>
            <input type="hidden" value={code} name="code" />
            <Input type="tel" className="col-lg-6" addon={<span className="text-secondary text-small">+{code}</span>} onChange={this.inputChangedHandler} value={phone} validation={{ required: true, isNumeric: true }} name="phone" required placeholder="Phone Number" />
            <FormGroup className="col-12">
                <CustomInput type="file" name="photo" accept=".jpg,.jpeg,.png" placeholder="Profile Photo" onChange={this.inputChangedHandler} icon={faFile} />
            </FormGroup>
            <FormGroup className="col-12 d-flex align-items-center">
                <div className='text-700 pr-4'>Account Status</div>
                <Label check>
                    <CustomInput type="radio" name="is_active" id="status-1" onChange={this.inputChangedHandler} value={1} defaultChecked label="Active" inline />
                </Label>
                <Label check>
                    <CustomInput type="radio" name="is_active" id="status-2" onChange={this.inputChangedHandler} value={0} label="Inactive" inline />
                </Label>
            </FormGroup>

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (id, data) => dispatch(actions.patchEmployees(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));