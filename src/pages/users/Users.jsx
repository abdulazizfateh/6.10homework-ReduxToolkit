import React from 'react'
// Fetch hook
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
// User Cards Component
import UserCards from '../../components/UserCards';

const Users = () => {
    const { data, loading } = useFetch("/users");

    return (
        <UserCards data={data?.users} loading={loading} />
    )
}

export default React.memo(Users);