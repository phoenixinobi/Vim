"use strict";

import { Position } from './../motion/position';
import { Operator } from './operator';
import { ModeHandler } from './../mode/modeHandler.ts';
import { TextEditor } from './../textEditor';
import { Register } from './../register/register';

export class PutOperator extends Operator {

    constructor(modeHandler: ModeHandler) {
        super(modeHandler);
    }

    // public key(): string { return "p"; }

    /**
     * Run this operator on a range.
     */
    public async run(start: Position, end: Position): Promise<void> {
        const data = Register.get();

        await TextEditor.insertAt(data, start.getRight());
        this.modeHandler.currentMode.motion.moveTo(start.line, start.getRight().character);
    }
}