import React from 'react';
import PropTypes from 'prop-types';

const EducationListItem = ({ education }) => {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    
    return (
        <div className="w-full p-4 bg-white shadow-md rounded-lg relative">
            {education.currentlyStudyingHere && (
                <span className="absolute top-2 right-2 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Currently Studying Here</span>
            )}
            <h3 className="text-xl font-semibold mb-2">{education.schoolName}</h3>
            <p className="text-gray-700">{education.degreeType} in {education.degreeName}</p>
            <p className="text-gray-600">{education.city}, {education.country}</p>
            <p className="text-gray-500">{formatDate(education.startDate)} - {education.endDate ? formatDate(education.endDate) : 'Present'}</p>
            <hr className="my-4" />
            <p className="text-gray-700">{education.description}</p>
        </div>
    );
};

EducationListItem.propTypes = {
    education: PropTypes.shape({
        id: PropTypes.number.isRequired,
        schoolName: PropTypes.string.isRequired,
        degreeType: PropTypes.string.isRequired,
        degreeName: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        currentlyStudyingHere: PropTypes.bool,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string,
        description: PropTypes.string.isRequired
    }).isRequired
};

export default EducationListItem;