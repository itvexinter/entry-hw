import { AnyAction } from 'redux';
import produce from 'immer';
import { HardwareStateEnum } from '../../constants/constants';

// interface
export interface ICommonState {
    currentState: HardwareStateEnum;
    categoryState: string;
    isLicenseShow: boolean;
    isCloudMode: boolean;
    hardwareList: any[];
}

// types
export const LICENSE_VIEW_TOGGLE = 'common/LICENSE_VIEW_TOGGLE';

// actions
export const toggleLicenseView = (isShow: boolean) => ({ type: LICENSE_VIEW_TOGGLE, payload: isShow });
// export const selectPost = (pageId: string) => ({ type: SELECT_POST_START, payload: pageId });

// reducer
const initialState: ICommonState = {
    currentState: HardwareStateEnum.disconnected,
    categoryState: 'all',
    isLicenseShow: false,
    isCloudMode: false,
    hardwareList: [],
};

export default (state = initialState, { type, payload }: AnyAction) => {
    switch (type) {
        case LICENSE_VIEW_TOGGLE: 
            return produce(state, (nextState) => {
                nextState.isLicenseShow = payload;
            });
        default:
            return produce(state, () => {});
    }
}