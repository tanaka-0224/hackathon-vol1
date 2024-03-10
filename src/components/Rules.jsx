import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../types/Visual.css";

const Rules = () => {
    const GPTRulesURI = `${process.env.REACT_APP_BACKEND_URI}/rules`;
    const [rulesText, setRulesText] = useState('');
    useEffect(() => {
        // 当组件加载时，请求规则信息
        fetch(GPTRulesURI)  // 使用你的Spring Boot应用的实际域和端口
            .then(response => response.json())
            .then(data => {
                // 假设后端返回的数据结构是 { description: "规则描述..." }
                setRulesText(data.content);
            })
            .catch(error => {
                console.error('Error fetching rules:', error);
                setRulesText('Failed to load rules.');
            });
    }, []);  // 空依赖数组表示这个effect只在组件挂载时运行一次

    return (
        <div>
            <h1 style={{textAlign: "center", lineHeight: "50px", fontSize: 100, color: '#428278'}}>
                Rules
            </h1>
            <h2 style={{textAlign: "center", lineHeight: "60px", fontSize: 35}}>
                {rulesText}  {/* 动态显示规则文本 */}
            </h2>
            <Link to="/" style={{ textDecoration: 'underline #428278' }}>
                <h3 style={{textAlign: "center", lineHeight: "20px", fontSize: 50, color: "#000000"}}>
                    Back
                </h3>
            </Link>
        </div>
    );
};

export default Rules;
