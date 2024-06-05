import React from 'react';
import PropTypes from 'prop-types';

const WorkExperienceListItem = ({ work }) => {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    
    return (
        <div className="w-full p-4 bg-white shadow-md rounded-lg relative">
            {work.currentlyWorkingHere && (
                <span className="absolute top-2 right-2 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Currently Working Here</span>
            )}
            <h3 className="text-xl font-semibold mb-2">{work.companyName}</h3>
            <p className="text-gray-700">{work.jobTitle}</p>
            <p className="text-gray-600">{work.city}, {work.country}</p>
            <p className="text-gray-600">{work.jobType}</p>
            <p className="text-gray-500">{formatDate(work.startDate)} - {work.endDate ? formatDate(work.endDate) : 'Present'}</p>
            <hr className="my-4" />
            <p className="text-gray-700">{work.description}</p>
        </div>
    );
};

WorkExperienceListItem.propTypes = {
    work: PropTypes.shape({
        id: PropTypes.number.isRequired,
        companyName: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        jobType: PropTypes.string.isRequired,
        currentlyWorkingHere: PropTypes.bool,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string,
        description: PropTypes.string.isRequired
    }).isRequired
};

export default WorkExperienceListItem;
