import mongoose from 'mongoose';
import clinicalsSchema from './clinicals.model';

clinicalsSchema.statics = {
	get: function(query, cb) {
		this.find(query, cb)
	},
	create: function(data, cb) {
		const clinicalData = new this(data);
		clinicalData.save(cb)
	}
}

const clinicalsModel = mongoose.model("Clinicals", clinicalsSchema, "clinicals");
module.exports = clinicalsModel;