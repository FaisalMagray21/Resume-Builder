import { Plus, Trash2, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import api from "../configs/api";

const ProjectForm = ({ data, onChange }) => {
  const { token } = useSelector((state) => state.auth);
  const [isEnhancing, setIsEnhancing] = useState(null); // track which project is enhancing

  const addProject = () => {
    onChange([...data, { name: "", type: "", description: "" }]);
  };

  const removeProject = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const enhanceDescription = async (index) => {
    try {
      setIsEnhancing(index);
      const project = data[index];
      const prompt = `Enhance my project description: ${project.description} for the project "${project.name}" (${project.type}).`;
      const response = await api.post(
        "/api/ai/enhance-project",
        { userContent: prompt },
        { headers: { Authorization: token } }
      );
      updateProject(index, "description", response.data.enhancedContent);
      toast.success("Project description enhanced successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Enhancement failed!");
    } finally {
      setIsEnhancing(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Projects
          </h3>
          <p className="text-sm text-gray-500">
            Add and enhance your project details below.
          </p>
        </div>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-700">
          <p>No projects added yet.</p>
          <p className="text-sm">Click "Add Project" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((project, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-800">Project #{index + 1}</h4>
                <button
                  onClick={() => removeProject(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">Project Name</label>
                  <input
                    value={project.name || ""}
                    onChange={(e) => updateProject(index, "name", e.target.value)}
                    type="text"
                    placeholder="Enter project name"
                    className="px-3 py-2 text-sm border rounded-lg w-full mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Project Type</label>
                  <input
                    value={project.type || ""}
                    onChange={(e) => updateProject(index, "type", e.target.value)}
                    type="text"
                    placeholder="e.g., Web App, Mobile App, API"
                    className="px-3 py-2 text-sm border rounded-lg w-full mt-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Project Description
                  </label>
                  <button
                    onClick={() => enhanceDescription(index)}
                    disabled={isEnhancing === index}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
                  >
                    <Sparkles className="w-3 h-3" />
                    {isEnhancing === index ? "Enhancing..." : "Enhance with AI"}
                  </button>
                </div>
                <textarea
                  value={project.description || ""}
                  onChange={(e) => updateProject(index, "description", e.target.value)}
                  rows={4}
                  className="w-full text-sm px-3 py-2 border rounded-lg resize-none"
                  placeholder="Describe your project goals, features, and technologies used..."
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectForm;
