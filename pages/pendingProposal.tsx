import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/PendingProposal'

import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'
import { useContractRead, useContractReads } from 'wagmi'
import { useEffect, useState } from 'react';

import React from 'react';
import { data } from 'autoprefixer';
import Link from 'next/link'


export default function PendingProposal() {


    const [proposalCount, setProposalCount] = useState(-99)

    const empty: number[] = []
    const [array1, setArray1] = useState(empty)

    // gets the total number of proposals submitted
    const getProposalCount = useContractRead({
        addressOrName: GOVERNANCE_ADDRESS,
        contractInterface: GOVERNANCE_ABI,
        functionName: 'proposalCount',
        watch: true,
        onSuccess(data) {

            setProposalCount(parseInt(data.toString()))
            console.log('Found proposal count', proposalCount)
            setArray()
        }
    })


    function setArray() {
        let array = []
        for (let i = 1; i <= proposalCount; i++) {
            if (array1.length < proposalCount) {
                array.push(i)
            }
        }
<<<<<<< HEAD
        //setArray1(array1.reverse())
=======
        setArray1(array.reverse())
>>>>>>> b491c0e2dc429a9394ce120bc401075cf73a094f
    }

    return (
        <>
            <h1 className={styles.header}>Pending Proposals</h1>
            <div className={styles.box}>
                {array1.map((i) => (
                    <div key={i}>                           
                        <Proposal index={i} />
                    </div>
                ))}
            </div>
        </>
    )
}