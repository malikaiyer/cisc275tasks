/* eslint-disable prettier/prettier */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestion = questions.filter((q: Question): boolean => q.published);
    return publishedQuestion;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpt = questions.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length !== 0
    );
    return nonEmpt;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(questions: Question[], id: number): Question | null {
    const idq = questions.find((q:Question): boolean => q.id === id);
    if (idq === null || idq === undefined){
        return null;
    }
    return idq;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const rmQ = questions.filter((q: Question): boolean => q.id !== id);
    return rmQ;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const qNames = questions.map((q: Question): string => q.name);
    return qNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totSum = questions.reduce((currentSum: number, q: Question) => currentSum + q.points, 0);
    return totSum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pubQ = getPublishedQuestions(questions);
    const sumQ = sumPoints(pubQ);
    return sumQ;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const qCSV = questions.map(
        (q: Question): string =>
            q.id +
            "," +
            q.name +
            "," +
            q.options.length +
            "," +
            q.points +
            "," +
            q.published
    );
    const upperLabel = "id,name,options,points,published\n";
    return upperLabel + qCSV.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans = questions.map((q:Question): Answer => ({
        questionId: q.id,
        text: "",
        submitted: false,
        correct: false,
    }));
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pubQu = questions.map((q:Question): Question => ({...q, published: true}));
    return pubQu;
}
/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (!questions || questions.length === 0){
        return true;
    }

    const type1 = questions[0].type;
    const sameT = questions.filter((q: Question): boolean => q.type !== type1);
    if (sameT.length===0){
        return true;
    } 
    return false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const blankQ = makeBlankQuestion(id, name, type);
    // const newArr = questions.map((q:Question): Question => ({
    //     ...q, ...blankQ}));
    const newArr = [...questions, blankQ];
    return newArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const renameQ = questions.map((q: Question) => {
        if (q.id === targetId) {
            return { ...q, name: newName };
        } else {
            return q;
        }
    });
    return renameQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const QtypebyID = questions.map((q: Question) => {
        if (q.id === targetId) {
            return {
                ...q,
                type: newQuestionType, options: newQuestionType === "multiple_choice_question" ? q.options: []};
        } else {
            return q;
        }
    });
    return QtypebyID;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    //function to deep copy an array of questions
    function deepCloneQuestions(questions: Question[]): Question[] {
        return questions.map(
            (q: Question): Question => ({
                ...q,
                id: q.id,
                name: q.name,
                body: q.body,
                type: q.type,
                options: [...q.options], 
                expected: q.expected,
                points: q.points,
                published: q.published,
            })
        );
    }

    const clonedQ = deepCloneQuestions(questions);
    const targetQInd = clonedQ.findIndex((q): boolean => q.id === targetId);

    const targetQuestion = clonedQ[targetQInd];

    if (targetOptionIndex === -1){
        targetQuestion.options.push(newOption);
    } else{
        targetQuestion.options[targetOptionIndex] = newOption;
    }
    
    return clonedQ;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    //function to deep copy an array of questions
    function deepCloneQuestions(questions: Question[]): Question[] {
        return questions.map(
            (q: Question): Question => ({
                ...q,
                id: q.id,
                name: q.name,
                body: q.body,
                type: q.type,
                options: [...q.options],
                expected: q.expected,
                points: q.points,
                published: q.published
            })
        );
    }

    const clonedQ = deepCloneQuestions(questions);
    const targetQInd = clonedQ.findIndex((q): boolean => q.id === targetId);
    const dupQ = duplicateQuestion(newId, clonedQ[targetQInd]);
    clonedQ.splice(targetQInd+1, 0, dupQ);

    return clonedQ;
}
