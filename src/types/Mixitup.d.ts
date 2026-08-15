declare module "mixitup" {
    interface MixitupState {
        activeFilter: unknown;
        activeSort: unknown;
        totalShow: number;
        totalHide: number;
        show: Element[];
        hide: Element[];
        [key: string]: unknown;
    }

    interface MixitupConfig {
        animation?: {
            enable?: boolean;
            effects?: string;
            effectsIn?: string;
            effectsOut?: string;
            duration?: number;
            easing?: string;
            [key: string]: unknown;
        };
        selectors?: {
            target?: string;
            control?: string;
            [key: string]: unknown;
        };
        controls?: {
            enable?: boolean;
            live?: boolean;
            scope?: string;
            toggleLogic?: string;
            toggleDefault?: string;
            [key: string]: unknown;
        };
        load?: {
            filter?: string;
            sort?: string;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    }

    interface Mixer {
        filter(
            selector: string,
            animate?: boolean,
            callback?: () => void,
        ): Promise<MixitupState>;
        sort(
            sortString: string,
            animate?: boolean,
            callback?: () => void,
        ): Promise<MixitupState>;
        show(): Promise<MixitupState>;
        hide(): Promise<MixitupState>;
        toggleOn(selector: string): Promise<MixitupState>;
        toggleOff(selector: string): Promise<MixitupState>;
        getState(): MixitupState;
        isMixing(): boolean;
        forceRefresh(): void;
        destroy(cleanUp?: boolean): void;
    }

    function mixitup(
        container: Element | string,
        config?: MixitupConfig,
        foreignDoc?: Document,
    ): Mixer;

    export default mixitup;
}
