import dao from './clinicals.dao';
import mongodb from 'mongodb';

exports.getAll = (req, res) => {
	dao.get({patient: mongodb.ObjectID(req.params.patientId)}, (err, clinicalData) => {
		if(err) console.log(err);
		res.send(clinicalData);
	})
}

exports.create = (req, res) => {
	const clinicals = req.body;
	dao.create(clinicals, (err, clinicals) => {
		if(err) console.log(err);
		res.send(clinicals)
	})
}