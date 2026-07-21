interface SettingsToggleProps {
    title: string;
    description: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function SettingsToggle({
    title,
    description,
    checked,
    onChange,
}: SettingsToggleProps) {
    return (
        <label className="setting-toggle">
            <span className="setting-content">
                <span className="setting-title">{title}</span>
                <span className="setting-">{description}</span>
            </span>

            <input
            className="setting-input"
            type="checkbox"
            checked={checked}
            onChange={(event) => onChange(event.target.checked)}
            />

            <span className="switch" aria-hidden="true">
                <span className="switch-thumb" />
            </span>

        </label>
    )
} 