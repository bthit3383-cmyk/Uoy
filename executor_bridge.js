const ExecutorBridge = {
    endpoints: { delta: "https://delta-exec.link", fm: "https://fm-exec.link" },
    dispatch: function(scriptId) {
        console.log(`[BRIDGE] Dispatching script ${scriptId} to executor...`);
        // Logic การจัดการ Data และส่งผ่าน window.postMessage
    }
};
