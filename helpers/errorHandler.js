const handleError = (error, res) => {
    return res.status(404).send({
        message: error.message,
        msgError: true
    })
}
module.exports = handleError;