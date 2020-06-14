export interface FacePackage{
    id:string

    /**
     * 表情包的友好名称
     *
     * @type {string}
     * @memberof FacePackage
     */
    name:string
    faces:Array<Face>
}
export interface Face{

    /**
     * 与php方互通的表情id
     *
     * @type {string}
     * @memberof Face
     */
    id:string

    /**
     *
     * 表情的url
     * @type {string}
     * @memberof Face
     */
    url:string

}