import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	age: Number,
	clinicals: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Clinicals'
		}
	]
})

module.exports = patientSchema;