import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApplicantListItem from './ApplicantListItem';
import applicantsData from '../../../../json/applicants.json';

export default function ApplicantListHeader() {
    const [applicants, setApplicants] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeProfile, setActiveProfile] = useState(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    useEffect(() => {
        const updatedApplicants = applicantsData.map((applicant, index) => {
            return {
                ...applicant,
                applicantNo: index,
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
        setCurrentPage(1); // Reset to the first page on search
    };

    // Filtered and paginated applicants
    const filteredApplicants = applicants.filter(applicant =>
        applicant.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        applicant.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredApplicants.length / itemsPerPage);
    const paginatedApplicants = filteredApplicants.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
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
                <div className='container mx-auto'>
                    <div className={`applicantListItem flex items-center justify-between gap-5 w-full p-0 mt-10`}>
                        <div className='flex items-start gap-10 w-10/12'>
                            <p className='text-gray-600 font-bold w-1/15'>Nr</p>
                            <div className='text-left w-1/5'>
                                <h5 className='text-gray-600 font-bold'>Full Name</h5>
                            </div>
                            <p className='text-gray-600 w-1/5 font-bold'>Email</p>
                            <p className='text-gray-600 w-1/5 font-bold' >Resume AI Score</p>
                        </div>
                        <div className='flex items-end gap-5 w-1/6'>
                            <p className='text-gray-600 w-1/5 font-bold'>Actions</p>
                        </div>
                    </div>
                    <hr className='h-px my-2 bg-gray-300 border-0' />
                    <div className='flex flex-col gap-4 pt-1'>
                        {paginatedApplicants.map(applicant => (
                            <ApplicantListItem key={applicant.id} {...applicant} />
                        ))}
                    </div>
                    <div className='flex justify-center mt-4'>
                        {currentPage == 1 ? <button
                             style={{ width: "2.5rem", height: "2.5rem" }}
                            className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-grey-100 border-2 text-grey-200 font-bold text-sm border-grey-200 `}                        >
                            {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" strokeOpacity="0.2" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            }
                        </button> :
                            <button
                                 style={{ width: "2.5rem", height: "2.5rem" }}
                                onClick={() => handlePageChange(currentPage - 1)}
                                className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-jobportal-pink hover:opacity-90 border-2 text-white font-bold text-sm border-jobportal-pink `}
                            >
                                {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                                }
                            </button>

                        }


                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'focus:outline-none rounded-md bg-jobportal-pink hover:opacity-90 border-2 text-white font-bold text-sm border-jobportal-pink' : 'focus:outline-none rounded-md bg-gray-50 border-2 text-gray-900 text-sm border-gray-400'}`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        {currentPage == totalPages ? <button
                             style={{ width: "2.5rem", height: "2.5rem" }}
                            className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-grey-100 border-2 text-grey-200 font-bold text-sm border-grey-200 `}    >
                            {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" strokeOpacity="0.2" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            }
                        </button> : <button

                            onClick={() => handlePageChange(currentPage + 1)}
                            style={{ width: "2.5rem", height: "2.5rem" }}
                            className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-jobportal-pink hover:opacity-90 border-2 text-white font-bold text-sm border-jobportal-pink `}
                        >
                            {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            }
                        </button>}

                    </div>
                </div>
            </section>
        </div>
    );
}
