import React, {ChangeEvent, useState} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'
import {blue} from "@mui/material/colors";

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: string, count: string) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {

    const [viewItems, setViewItems] = useState(itemsCountForPage)
    const lastPage = Math.floor(totalCount / +viewItems) // пишет студент // вычислить количество страниц

    const onChangeCallback = (_: ChangeEvent<unknown>, page: number) => {
        // пишет студент
        onChange(`${page}`, `${viewItems}`)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        setViewItems(+event.currentTarget.value)
        onChange(`${page}`, `${+event.currentTarget.value}`)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                    '& .MuiPagination-ul': {
                        gap: 0.1,                // расстояние между кнопками
                        alignItems: 'center',
                    },

                    // каждая кнопка/элемент
                    '& .MuiPaginationItem-root': {
                        width: 36,
                        height: 36,
                        borderRadius: '8px',
                        border: '1px solid #E5E7EB',
                        fontSize: 14,
                        lineHeight: 1,
                        backgroundColor: '#fff',
                        transition: 'all .15s ease',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&:hover': {
                            backgroundColor: blue[50],
                            borderColor: blue[200],
                        },

                        // выбранная страница
                        '&.Mui-selected': {
                            color: '#fff',
                            backgroundColor: blue[500],
                            borderColor: blue[500],
                            '&:hover': {
                                backgroundColor: blue[600],
                                borderColor: blue[600],
                            },
                        },

                        // disabled (если будет нужно)
                        '&.Mui-disabled': {
                            opacity: 0.5,
                        },
                    },

                    // троеточие "…"
                    '& .MuiPaginationItem-ellipsis': {
                        border: 'none',
                        background: 'transparent',
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                className={s.selector}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
