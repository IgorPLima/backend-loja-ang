import evaluationRepository from "../repositories/EvaluationRepository.js"

const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel)
}

const getUEvaluationById = (id) => {
    return evaluationRepository.saveEvaluation(id)
}

const getAllEvaluation = () => {
    return evaluationRepository.getAllEvaluation()
}

const deleteEvaluationById = (id) => {
    return evaluationRepository.deleteEvaluationById(id);
}

const updateEvaluationById = (id, evaluationModel) => {
    return evaluationRepository.updateEvaluationById(id, evaluationModel)
}

const service = {
    saveEvaluation,
    getUEvaluationById,
    getAllEvaluation,
    deleteEvaluationById,
    updateEvaluationById
}

export default service;