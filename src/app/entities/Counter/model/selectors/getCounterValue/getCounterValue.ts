import { createSelector } from '@reduxjs/toolkit';
import {getCounter} from "app/entities/Counter/model/selectors/getCounter/getCounter";
import {CounterSchema} from "app/entities/Counter";

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
);
