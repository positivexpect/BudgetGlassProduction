"use client";

import React, { useState, useEffect } from "react";
import {
  DOOR_CONFIGURATIONS,
  FRAME_STYLES,
  HARDWARE_FINISHES,
  GLASS_TYPES,
  type ShowerConfiguration,
  type DoorConfiguration,
  type FrameStyle,
  type HardwareFinish,
  type GlassType,
} from "../types/shower";

export default function ShowerBuilder() {
  const [configuration, setConfiguration] = useState<ShowerConfiguration>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [previewImage, setPreviewImage] = useState<string>(
    "/images/shower-gallery/shower-placeholder.svg",
  );

  // Update preview image when configuration changes
  useEffect(() => {
    updatePreviewImage();
  }, [configuration]);

  const updatePreviewImage = () => {
    const { frameStyle, hardwareFinish, glassType } = configuration;

    if (frameStyle && hardwareFinish && glassType) {
      // Generate image path based on selections
      const imagePath = `/images/shower-gallery/${frameStyle.id}_${hardwareFinish.id}_${glassType.id}.jpg`;
      setPreviewImage(imagePath);
    } else {
      setPreviewImage("/images/shower-gallery/shower-placeholder.svg");
    }
  };

  const handleDoorConfigurationSelect = (
    doorConfiguration: DoorConfiguration,
  ) => {
    setConfiguration((prev) => ({ ...prev, doorConfiguration }));
    setCurrentStep(1);
  };

  const handleFrameStyleSelect = (frameStyle: FrameStyle) => {
    setConfiguration((prev) => ({ ...prev, frameStyle }));
    setCurrentStep(2);
  };

  const handleHardwareFinishSelect = (hardwareFinish: HardwareFinish) => {
    setConfiguration((prev) => ({ ...prev, hardwareFinish }));
    setCurrentStep(3);
  };

  const handleGlassTypeSelect = (glassType: GlassType) => {
    setConfiguration((prev) => ({ ...prev, glassType }));
  };

  const isStepComplete = (step: number): boolean => {
    switch (step) {
      case 0:
        return !!configuration.doorConfiguration;
      case 1:
        return !!configuration.frameStyle;
      case 2:
        return !!configuration.hardwareFinish;
      case 3:
        return !!configuration.glassType;
      default:
        return false;
    }
  };

  const allStepsComplete =
    isStepComplete(0) &&
    isStepComplete(1) &&
    isStepComplete(2) &&
    isStepComplete(3);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            🔧 Step-by-Step Shower Builder
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Design your perfect shower door in 4 simple steps. See your
            configuration come to life with our live preview.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {[0, 1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      currentStep === step
                        ? "bg-primary text-white"
                        : isStepComplete(step)
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {isStepComplete(step) ? "✓" : step + 1}
                  </div>
                  <span
                    className={`ml-2 font-medium ${
                      currentStep === step ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    Step {step + 1}
                  </span>
                  {step < 3 && (
                    <div
                      className={`w-16 h-0.5 ml-4 ${
                        isStepComplete(step) ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Configuration Steps */}
            <div className="space-y-8">
              {/* Step 0: Door Configuration */}
              <div
                className={`p-6 rounded-lg border-2 transition-all ${
                  currentStep === 0
                    ? "border-primary bg-primary/5"
                    : isStepComplete(0)
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">1.</span> Choose Door Type
                  {configuration.doorConfiguration && (
                    <button
                      onClick={() => setCurrentStep(0)}
                      className="ml-auto text-sm text-primary hover:text-primary-dark"
                    >
                      Change
                    </button>
                  )}
                </h3>
                {configuration.doorConfiguration && currentStep !== 0 ? (
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold">
                      {configuration.doorConfiguration.name}
                    </h4>
                    <p className="text-gray-600">
                      {configuration.doorConfiguration.description}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {DOOR_CONFIGURATIONS.map((config) => (
                      <button
                        key={config.id}
                        onClick={() => handleDoorConfigurationSelect(config)}
                        className="p-4 text-left border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        <h4 className="font-semibold text-sm">{config.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {config.description}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Step 1: Frame Style */}
              <div
                className={`p-6 rounded-lg border-2 transition-all ${
                  currentStep === 1
                    ? "border-primary bg-primary/5"
                    : isStepComplete(1)
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">2.</span> Pick Your Frame Style
                  {configuration.frameStyle && (
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="ml-auto text-sm text-primary hover:text-primary-dark"
                    >
                      Change
                    </button>
                  )}
                </h3>
                {!configuration.doorConfiguration ? (
                  <p className="text-gray-500 italic">Complete Step 1 first</p>
                ) : configuration.frameStyle && currentStep !== 1 ? (
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold">
                      {configuration.frameStyle.name}
                    </h4>
                    <p className="text-gray-600">
                      {configuration.frameStyle.description}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {FRAME_STYLES.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => handleFrameStyleSelect(style)}
                        className="p-4 text-left border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        <h4 className="font-semibold text-sm">{style.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {style.description}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Step 2: Hardware Finish */}
              <div
                className={`p-6 rounded-lg border-2 transition-all ${
                  currentStep === 2
                    ? "border-primary bg-primary/5"
                    : isStepComplete(2)
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">3.</span> Choose Your Hardware Finish
                  {configuration.hardwareFinish && (
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="ml-auto text-sm text-primary hover:text-primary-dark"
                    >
                      Change
                    </button>
                  )}
                </h3>
                {!configuration.frameStyle ? (
                  <p className="text-gray-500 italic">Complete Step 2 first</p>
                ) : configuration.hardwareFinish && currentStep !== 2 ? (
                  <div className="bg-white p-4 rounded border flex items-center">
                    <div
                      className="w-6 h-6 rounded mr-3"
                      style={{
                        backgroundColor: configuration.hardwareFinish.colorHex,
                      }}
                    />
                    <span className="font-semibold">
                      {configuration.hardwareFinish.name}
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    {HARDWARE_FINISHES.map((finish) => (
                      <button
                        key={finish.id}
                        onClick={() => handleHardwareFinishSelect(finish)}
                        className="p-3 text-center border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        <div
                          className="w-8 h-8 rounded mx-auto mb-2"
                          style={{ backgroundColor: finish.colorHex }}
                        />
                        <span className="text-sm font-medium">
                          {finish.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Step 3: Glass Type */}
              <div
                className={`p-6 rounded-lg border-2 transition-all ${
                  currentStep === 3
                    ? "border-primary bg-primary/5"
                    : isStepComplete(3)
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">4.</span> Select Glass Type
                  {configuration.glassType && (
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="ml-auto text-sm text-primary hover:text-primary-dark"
                    >
                      Change
                    </button>
                  )}
                </h3>
                {!configuration.hardwareFinish ? (
                  <p className="text-gray-500 italic">Complete Step 3 first</p>
                ) : configuration.glassType && currentStep !== 3 ? (
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold">
                      {configuration.glassType.name}
                    </h4>
                    <p className="text-gray-600">
                      {configuration.glassType.description}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {GLASS_TYPES.map((glass) => (
                      <button
                        key={glass.id}
                        onClick={() => handleGlassTypeSelect(glass)}
                        className="p-4 text-left border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        <h4 className="font-semibold text-sm">{glass.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {glass.description}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Live Preview */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-neutral-lightest p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">��️ Live Preview</h3>
                <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4 relative">
                  <img
                    src={previewImage}
                    alt="Shower door preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src =
                        "/images/shower-gallery/shower-placeholder.svg";
                    }}
                  />
                  {!allStepsComplete && (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">🚿</div>
                        <p>Complete all steps to see your design</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Configuration Summary */}
                {allStepsComplete && (
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold">Your Configuration:</h4>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="font-medium">Door Type:</span>{" "}
                        {configuration.doorConfiguration?.name}
                      </p>
                      <p>
                        <span className="font-medium">Frame:</span>{" "}
                        {configuration.frameStyle?.name}
                      </p>
                      <p>
                        <span className="font-medium">Hardware:</span>{" "}
                        {configuration.hardwareFinish?.name}
                      </p>
                      <p>
                        <span className="font-medium">Glass:</span>{" "}
                        {configuration.glassType?.name}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                {allStepsComplete && (
                  <button
                    onClick={() => {
                      // Store configuration in sessionStorage and redirect to contact
                      sessionStorage.setItem(
                        "showerConfig",
                        JSON.stringify(configuration),
                      );
                      window.location.href = "/contact?from=shower-builder";
                    }}
                    className="w-full btn-primary"
                  >
                    Get a Quote for This Design
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
