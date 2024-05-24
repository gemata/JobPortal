import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApplicantListItem from './ApplicantListItem';
import applicantsData from '../../../../json/applicants.json';

export default function ApplicantListHeader() {
    const [applicants, setApplicants] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const updatedApplicants = applicantsData.map((applicant, index) => {
            return {
                ...applicant,
                next: index < applicantsData.length - 1 ? applicantsData[index + 1].id : null,
                previous: index > 0 ? applicantsData[index - 1].id : null
            };
        });
        setApplicants(updatedApplicants);
    }, []);

    const handleSortCriteriaChange = (event) => {
        setSortCriteria(event.target.value);
        sortApplicants(event.target.value, sortOrder);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
        sortApplicants(sortCriteria, event.target.value);
    };

    const sortApplicants = (criteria, order) => {
        const sortedApplicants = [...applicants].sort((a, b) => {
            let comparison = 0;
            if (criteria === 'date') {
                comparison = new Date(a.createdAt) - new Date(b.createdAt);
            } else if (criteria === 'name') {
                comparison = a.firstName.localeCompare(b.firstName);
            } else if (criteria === 'email') {
                comparison = a.email.localeCompare(b.email);
            } else if (criteria === 'score') {
                comparison = a.resumeAIScore - b.resumeAIScore;
            }
            return order === 'asc' ? comparison : -comparison;
        });
        setApplicants(sortedApplicants);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredApplicants = applicants.filter(applicant => 
        applicant.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || 
        applicant.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <section className=''>
                <div className='flex container mx-auto pt-10 justify-between'>
                    <div className='flex w-1/3'>
                        <input
                            type='text'
                            className='focus:outline-none rounded-none rounded-l-md bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 border-r-0'
                            placeholder='Search User'
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button
                            type='button'
                            className='inline-flex rounded-e-lg text-gray-900 items-center px-3 text-sm text-gray-900 bg-gray-200 border-2 border-rounded border-gray-400 border-l-2'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex gap-5 w-1/2'>
                        <div className='flex w-1/3'>
                            <span className='inline-flex font-bold items-center px-3 text-sm text-gray-900 bg-gray-200 border-2 rounded-e-0 border-gray-400 border-e-0 rounded-s-md'>
                                Sort by:
                            </span>
                            <select className='focus:outline-none rounded-e-md bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 ' onChange={handleSortCriteriaChange}>
                                <option value='date'>Date Applied</option>
                                <option value='name'>Name</option>
                                <option value='email'>Email</option>
                                <option value='score'>Resume Score</option>
                            </select>
                        </div>
                        <div className='flex w-1/3'>
                            <span className='inline-flex font-bold items-center px-3 text-sm text-gray-900 bg-gray-200 border-2 rounded-e-0 border-gray-400 border-e-0 rounded-s-md'>
                                Order by:
                            </span>
                            <select className='focus:outline-none rounded-e-md bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 ' onChange={handleSortOrderChange}>
                                <option value='desc'>Descending</option>
                                <option value='asc'>Ascending</option>
                            </select>
                        </div>
                        <div className='flex w-1/3'>
                            <Link to='/company/jobs/create'>
                                <button type='button' className='inline-flex text-white bg-jobportal-pink hover:opacity-90 font-bold rounded-lg text-base px-5 py-2.5 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                     <p>Create Interview</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Section'>
                <div className=' container mx-auto'>
                    <div className={`applicantListItem flex items-center justify-between gap-5 w-full p-0 mt-10`}>
                        <div className='flex items-start gap-10 w-10/12'>
                            <div className='text-left w-1/4'>
                                <h5 className='text-gray-600 font-bold'>Full Name</h5>
                            </div>
                            <p className='text-gray-600 w-1/4 font-bold'>Email</p>
                            <p className='text-gray-600 w-1/4 font-bold' >Resume AI Score</p>
                        </div>
                        <div className='flex items-end gap-5 w-1/6'>
                            <p className='text-gray-600 w-1/4 font-bold'>Actions</p>
                        </div>
                    </div>
                    <hr className='h-px my-2 bg-gray-300 border-0' />
                    <div className='flex flex-col gap-4 pt-1'>
                        {filteredApplicants.map(applicant => (
                            <ApplicantListItem key={applicant.id} {...applicant} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
