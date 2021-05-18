import React from "react";

export interface IOutsideClickHandler {
    handleClickOutside: Function;
}

export default class OutsideClickHandler {
    wrapperRef:any = null;
    component: any;
    node: any;
    constructor(component: React.Component & IOutsideClickHandler) {
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.component = component;
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    setComponent(component: React.Component & IOutsideClickHandler) {
        this.component = component;

    }

    adjustListener(add: boolean) {
        if(add) {
            document.addEventListener('mousedown', this.handleClickOutside);
        } else {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }

    handleClickOutside (event:MouseEvent)  {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.component.handleClickOutside();
        }
      }

    setWrapperRef(node:any) {
        this.wrapperRef = node;
    }
}