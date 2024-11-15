// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 87RqUXPRhfuJ9yTiA95WNo
// Component: rqsyovS14ray

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import YouTube from "@plasmicpkgs/react-youtube";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 87RqUXPRhfuJ9yTiA95WNo/projectcss
import sty from "./PlasmicVideoEmbed.module.css"; // plasmic-import: rqsyovS14ray/css

createPlasmicElementProxy;

export type PlasmicVideoEmbed__VariantMembers = {};
export type PlasmicVideoEmbed__VariantsArgs = {};
type VariantPropType = keyof PlasmicVideoEmbed__VariantsArgs;
export const PlasmicVideoEmbed__VariantProps = new Array<VariantPropType>();

export type PlasmicVideoEmbed__ArgsType = {};
type ArgPropType = keyof PlasmicVideoEmbed__ArgsType;
export const PlasmicVideoEmbed__ArgProps = new Array<ArgPropType>();

export type PlasmicVideoEmbed__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultVideoEmbedProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicVideoEmbed__RenderFunc(props: {
  variants: PlasmicVideoEmbed__VariantsArgs;
  args: PlasmicVideoEmbed__ArgsType;
  overrides: PlasmicVideoEmbed__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      id={"talks"}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__tHkPd
        )}
      >
        {"Past Talks"}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__ofdzk)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__cmPe1)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__soZd1
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 500 }}
              >
                {
                  "Open Sourcing Scientific Research with Lab Discourse Graphs: "
                }
              </span>
              <React.Fragment>{""}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 400 }}
              >
                {"Matt Akamatsu,"}
              </span>
              <React.Fragment>{" Desci Denver 2024"}</React.Fragment>
            </React.Fragment>
          </div>
          <YouTube
            cc_load_policy={true}
            className={classNames("__wab_instance", sty.youTube__nlCye)}
            rel={false}
            videoId={"2xGQepp-f-8"}
          />
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__tWuT)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pU1Ub
            )}
          >
            <React.Fragment>
              <React.Fragment>{"A"}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 500 }}
              >
                {"ccelerating Scientific Discovery with Discourse Graphs"}
              </span>
              <React.Fragment>
                {": Joel Chan, Protocol labs research seminar"}
              </React.Fragment>
            </React.Fragment>
          </div>
          <YouTube
            cc_load_policy={true}
            className={classNames("__wab_instance", sty.youTube__tni3Z)}
            videoId={"53kLyq7PceQ"}
          />
        </Stack__>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__xOSos
        )}
      >
        <React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 500 }}
          >
            {"Research roadmapping with discourse graphs"}
          </span>
          <React.Fragment>
            {": Karola Kirsanow, NYC Protocol labs research seminar"}
          </React.Fragment>
        </React.Fragment>
      </div>
      <YouTube
        cc_load_policy={true}
        className={classNames("__wab_instance", sty.youTube__svJlp)}
        videoId={"P0KUt2yrUkw"}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVideoEmbed__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVideoEmbed__VariantsArgs;
    args?: PlasmicVideoEmbed__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicVideoEmbed__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicVideoEmbed__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicVideoEmbed__ArgProps,
          internalVariantPropNames: PlasmicVideoEmbed__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicVideoEmbed__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVideoEmbed";
  } else {
    func.displayName = `PlasmicVideoEmbed.${nodeName}`;
  }
  return func;
}

export const PlasmicVideoEmbed = Object.assign(
  // Top-level PlasmicVideoEmbed renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicVideoEmbed
    internalVariantProps: PlasmicVideoEmbed__VariantProps,
    internalArgProps: PlasmicVideoEmbed__ArgProps
  }
);

export default PlasmicVideoEmbed;
/* prettier-ignore-end */
