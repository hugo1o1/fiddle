const { default: dtsgenerator, parseSchema } = require('dtsgenerator');

const fs =  require('fs')

const jsc = '{"type":"object","title":"empty object","properties":{"code":{"type":"number"},"msg":{"type":"string"},"data":{"type":"object","title":"empty object","properties":{"name":{"type":"string","description":"题目名称"},"id":{"type":"number","description":"题目ID"},"description":{"type":"string","description":"题目要求"},"type":{"type":"integer","description":"题目类型"},"difficultyLevel":{"type":"integer","description":"难度等级"},"contentExplain":{"type":"string","description":"文本解析"},"videoExplainUrl":{"type":"string","description":"视频解析"},"referenceCode":{"type":"string","description":"参考代码"},"codeTestCases":{"type":"array","items":{"type":"object","properties":{"input":{"type":"string","description":"输入"},"output":{"type":"string","description":"输出"}},"required":["input","output"]},"description":"代码测试用例集合"},"status":{"type":"integer","description":"题目状态"},"creator":{"type":"string","description":"创建人"},"modifier":{"type":"string","description":"修改人"},"labels":{"type":"array","items":{"type":"object","properties":{"type":{"type":"integer","description":"\"1-题目难度，2-题目逻辑，3-题目分类\""},"name":{"type":"string","description":"标签名称"}},"required":["type","name"]}}},"required":["name","description","codeTestCases","referenceCode","videoExplainUrl","contentExplain","difficultyLevel","type","id","status","creator","modifier","labels"]}},"required":["code","data","msg"]}'
dtsgenerator({
    contents: [JSON.parse(jsc)],
    config: {/* Config object */},
}).then(content => {
   console.log(content);

   fs.watchFile('output.js',content)
}).catch(err => {
    /* Handle errors */
});