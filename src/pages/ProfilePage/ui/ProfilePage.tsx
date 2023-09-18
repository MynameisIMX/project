import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile"

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string,
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        Profile
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
