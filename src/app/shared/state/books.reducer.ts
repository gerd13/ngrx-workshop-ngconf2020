import { createReducer, on, Action, createSelector } from "@ngrx/store";
import { BookModel, calculateBooksGrossEarnings } from "src/app/shared/models";
import { BooksPageActions, BooksApiActions } from "src/app/books/actions";

export interface State {
    collection: BookModel[];
    activeBookId: string | null;
}

export const initialState: State = {
    collection: [],
    activeBookId: null
};

export const booksReducer = createReducer(
    initialState,
    on(
        BooksPageActions.enter,
        BooksPageActions.clearSelectedBook,
        (state, action) => {
            return {
                ...state,
                activeBookId: null
            }
        }),
    on(BooksPageActions.selectBook, (state, action) => {
        return {
            collection: state.collection,
            activeBookId: action.bookId
        }
    })
);
