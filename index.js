(() => {
	const VueEmailValidator = {}
		, EmailValidator = require('email-validator')
	VueEmailValidator.install = (Vue) => { Vue.prototype.$EmailValidator = EmailValidator }
	if (typeof exports === 'object') module.exports = VueEmailValidator
	else if (typeof define === 'function' && define.amd) {
		define([], () => VueEmailValidator)
	} else if (window.Vue) {
		window.VueEmailValidator = VueEmailValidator
		Vue.use(VueEmailValidator)
	}
})()
