import { useEffect, useState } from 'react';
import { getApiUrl } from '../config/api.config';

const DebugPage = () => {
  const [results, setResults] = useState<any>({});

  useEffect(() => {
    const testAPIs = async () => {
      const tests: any = {};

      // Test 1: Health check (via proxy)
      try {
        const healthRes = await fetch('/health');
        tests.healthProxy = {
          status: healthRes.status,
          ok: healthRes.ok,
          data: await healthRes.json().catch(() => 'No JSON'),
        };
      } catch (err: any) {
        tests.healthProxy = { error: err.message };
      }
      
      // Test 1b: Health check (direct - using proxy port)
      try {
        const backendPort = import.meta.env.VITE_BACKEND_PORT || '5001';
        const healthRes = await fetch(`http://localhost:${backendPort}/health`);
        tests.healthDirect = {
          status: healthRes.status,
          ok: healthRes.ok,
          data: await healthRes.json().catch(() => 'No JSON'),
        };
      } catch (err: any) {
        tests.healthDirect = { error: err.message };
      }

      // Test 2: Projects API
      try {
        const projectsRes = await fetch(getApiUrl('api/projects/get-all-projects'));
        tests.projects = {
          status: projectsRes.status,
          ok: projectsRes.ok,
          data: await projectsRes.json().catch(() => 'No JSON'),
        };
      } catch (err: any) {
        tests.projects = { error: err.message };
      }

      // Test 3: Blogs API
      try {
        const blogsRes = await fetch(getApiUrl('api/blogs/get-all-blogs'));
        tests.blogs = {
          status: blogsRes.status,
          ok: blogsRes.ok,
          data: await blogsRes.json().catch(() => 'No JSON'),
        };
      } catch (err: any) {
        tests.blogs = { error: err.message };
      }

      // Test 4: Direct backend test (bypass proxy)
      try {
        const backendPort = import.meta.env.VITE_BACKEND_PORT || '5001';
        const directRes = await fetch(`http://localhost:${backendPort}/health`);
        tests.directBackend = {
          status: directRes.status,
          ok: directRes.ok,
          data: await directRes.json().catch(() => 'No JSON'),
        };
      } catch (err: any) {
        tests.directBackend = { error: err.message };
      }

      setResults(tests);
    };

    testAPIs();
  }, []);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🔍 API Debug Page</h1>
      <pre className="bg-gray-800 p-4 rounded overflow-auto">
        {JSON.stringify(results, null, 2)}
      </pre>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Kontrol Listesi:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Backend çalışıyor mu? (health check)</li>
          <li>Vite proxy çalışıyor mu? (/api/* istekleri)</li>
          <li>API endpoint'leri yanıt veriyor mu?</li>
          <li>Firestore'da veri var mı? (boş array normal)</li>
        </ul>
      </div>
    </div>
  );
};

export default DebugPage;

