import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Button, ButtonGroup } from 'react-bootstrap';
function StaffListLoading() {
    return (
        <>
            <tr className="table_staff" >
                <td className="table_staff">
                    <SkeletonTheme color="#edebeb" highlightColor="white" >
                        <Skeleton count={1} height={30} />
                    </SkeletonTheme>
                </td>
                <td className="table_staff">
                    <SkeletonTheme color="#edebeb" highlightColor="white">
                        <Skeleton count={1} height={30} />
                    </SkeletonTheme>
                </td>
                <td className="table_staff" >
                    <SkeletonTheme color="#edebeb" highlightColor="white">
                        <Skeleton count={1} height={30} />
                    </SkeletonTheme>
                </td>
                <td className="table_staff">
                    <SkeletonTheme color="#edebeb" highlightColor="white">
                        <Skeleton count={1} height={30} />
                    </SkeletonTheme>
                </td>
                <td className="table_staff">
                    <SkeletonTheme color="#edebeb" highlightColor="white">
                        <Skeleton count={1} height={30} />
                    </SkeletonTheme>
                </td>
                <td className="table_staff">
                    <SkeletonTheme color="#edebeb" highlightColor="white">
                        <Skeleton count={1} height={30} />
                    </SkeletonTheme> </td>
                <td className="table_staff" style={{ width: 200 }}>
                    <SkeletonTheme color="#edebeb" highlightColor="white">
                        <Skeleton count={1} height={30} />
                    </SkeletonTheme> </td>
                <td className="table_staff" style={{ width: 200 }}>
                    <SkeletonTheme color="#edebeb" highlightColor="white">
                        <Skeleton count={1} height={30} />
                    </SkeletonTheme>
                </td>
                <td style={{ width: 20 }}>
                    <ButtonGroup>
                        <a href="# " data-toggle="modal" data-target="#modalSubscriptionForm">
                            <Button variant="info" size="sm"><i className="far fa-edit prefix" style={{ fontSize: 16 }}></i></Button>
                        </a>
                        <a href="#myModal" className="trigger-btn" data-toggle="modal">
                            <Button variant="danger" size="sm"><i className="far fa-trash-alt" style={{ fontSize: 16 }}></i></Button>
                        </a>
                    </ButtonGroup>
                </td>
            </tr>

        </>
    )

}
export default StaffListLoading;