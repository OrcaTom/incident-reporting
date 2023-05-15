//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/incident-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var incidenttype = req.session.data['incident-type']

  // Check whether the variable matches a condition
  if (incidenttype == "fly-tipping"){
    // Send user to next page
    res.redirect('/contact-local-council')
  }
  if (incidenttype == "other"){
    // Send user to next page
    res.redirect('/something-else')
  } else {
    // Send user to ineligible page
    res.redirect('/location')
  }
})
