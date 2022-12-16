const { promisify } = require('util')

const sendMailLib = require('sendmail')

const sendMail = promisify(sendMailLib())


const handler = async (event) => {
  const body = JSON.parse(event.body)

  const descriptor = {
    from: `"${body.email}" <no-reply@gql-modules.com>`,
    to: "egtalovikov@gmail.com",
    subject: `${body.name} sent you a message from gql-modules.com`,
    text: `Name: ${body.name}
    Email: ${body.email}
    Phone: ${body.phone}
    Message: ${body.message}`,
  }

  try {
    await sendMail(descriptor)
    return { statusCode: 200, body: '' }
  } catch (error) {
    return { statusCode: 500, body: error.message }
  }
}

module.exports = { handler }
