module.exports = {
    appointmentAt: null,
    updatedAt: null,
    trainerName: 'Johnny Cash',
    trainerFacility: 'Tribeca',
    clientName: 'Donna Summer',
    clientId: 100000,
    isSigned: false,
    isSubmitted: false,
    documents: [
        {
            templateId: 1,
            title: 'Informed Consent',
            templateType: 'InformedConsent',
            totalQuestions: 1,
            totalCompletedQuestions: 0
        },

        {
            title: 'Personal Information',
            templateId: 2,
            templateType: 'PersonalInformation',
            totalQuestions: 5,
            totalCompletedQuestions: 2
        },
        {
            title: 'Medical / Orthopedic HX',
            templateId: 3,
            templateType: 'Medical',
            totalQuestions: 5,
            totalCompletedQuestions: 2
        },
        {
            templateId: 4,
            templateType: 'Lifestyle',
            title: 'Lifestyle',
            totalQuestions: 15,
            totalCompletedQuestions: 10
        },

        {
            templateId: 5,
            templateType: 'ExerciseHistory',
            title: 'Exercise History',
            totalQuestions: 7,
            totalCompletedQuestions: 6
        },
        {
            templateId: 6,
            templateType: 'GoalsHabits',
            title: 'Goals & Habits',
            totalQuestions: 12,
            totalCompletedQuestions: 1
        },
        {
            templateId: 7,
            templateType: 'RegenerationNutrition',
            title: 'Regeneration & Nutrition',
            totalQuestions: 12,
            totalCompletedQuestions: 1
        },
        {
            templateId: 8,
            templateType: 'BodyMeasurements',
            title: 'Body Measurements',
            totalQuestions: 12,
            totalCompletedQuestions: 1
        },
        {
            templateId: 9,
            templateType: 'FunctionalMovementScreen',
            title: 'Functional Movement Screen',
            totalQuestions: 12,
            totalCompletedQuestions: 1
        },
        {
            templateId: 10,
            templateType: 'Equistretch',
            title: 'Equistretch',
            totalQuestions: 12,
            totalCompletedQuestions: 1
        },
        {
            templateId: 11,
            templateType: 'PerformanceTesting',
            title: 'Performance Testing',
            totalQuestions: 12,
            totalCompletedQuestions: 1
        },
        {
            templateId: 12,
            templateType: 2,
            title: 'Physical Test',
            totalQuestions: 5,
            totalCompletedQuestions: 5
        }
    ]
};